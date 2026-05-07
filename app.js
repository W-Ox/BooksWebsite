
const supabaseUrl = "https://gulobsywqccagtqwvrww.supabase.co"
const supabaseKey = "sb_publishable_J_OanXXkANnsHaP1NDFAuw_RvQh-pee"
const { createClient } = supabase
const client = createClient(supabaseUrl, supabaseKey)

const app = Vue.createApp({
    data() {
        return {
            books: [[],[]],
            showingBook:null,
            WillJess: 0,
            showAdd: false,
            dddBook:null,
            editingBook: null,
            newBook: {
              Title: '',
              Author: '',
              YearRead: '',
              Rating: '',
              Thoughts: ''
            }
        }
    },

  mounted() {
    this.loadBooks(),
    window.addEventListener('keydown', this.handleKeyPress)
  },

    beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress)
  },

methods: {
  async loadBooks() {
    const { data: Willdata } = await client
      .from('WillBooks')
      .select('*')
  
    this.books[0] = Willdata

        const { data:Jessdata } = await client
      .from('JessBooks')
      .select('*')
  
    this.books[1] = Jessdata
  },

handleKeyPress(event) {
  if (event.key !== 'Escape') return

  if (this.showAdd || this.editingBook) return

  if (this.dddBook) {
    this.closeOptionsBook()
    return
  }

  if (this.showingBook) {
    this.closeBook()
  }
},

  async addBook() {
  const tableName = this.WillJess === 0 ? 'WillBooks' : 'JessBooks'

  const { data, error } = await client
    .from(tableName)
    .insert([
      { 
        Title: this.newBook.Title,
        Author: this.newBook.Author,
        YearRead: this.newBook.YearRead,
        Rating: this.newBook.Rating,
        Thoughts: this.newBook.Thoughts
      }
    ])

    if (error) {
    console.error("Supabase error:", error)
    return
  }

  console.log("Inserted:", data)

  this.newBook = { Title: '', Author: '', YearRead: '', Rating: '', Thoughts: '' }
  this.showAdd = false
  this.loadBooks()
},

  closeAddBook() {
    this.showAdd = false
  },

  openBook(book) {
    this.showingBook = book
  },
  closeBook() {
    this.showingBook = null
  },
  optionsBook(book) {
    this.dddBook = book
  },
  closeOptionsBook() {
    this.dddBook = null
  },

  editBook(book) {
  // switch modal from options view → edit view
  this.editingBook = book

  // copy current book data into the form (this is what autofills inputs)
  this.newBook = {
    Title: book.Title,
    Author: book.Author,
    YearRead: book.YearRead,
    Rating: book.Rating,
    Thoughts: book.Thoughts
  }
  },

  stopEditBook() {
  this.editingBook = null
  this.dddBook = null
  this.newBook = { Title: '', Author: '', YearRead: '', Rating: '', Thoughts: '' }
  },


  async saveBook() {
  const tableName = this.WillJess === 0 ? 'WillBooks' : 'JessBooks'

  const { error } = await client
    .from(tableName)
    .update({
      Title: this.newBook.Title,
      Author: this.newBook.Author,
      YearRead: this.newBook.YearRead,
      Rating: this.newBook.Rating,
      Thoughts: this.newBook.Thoughts
    })
    .eq('id', this.editingBook.id)

  if (error) {
    console.error('Update error:', error)
    return
  }

  // reset state
  this.editingBook = null
  this.dddBook = null
  this.newBook = { Title: '', Author: '', Year: '', Rating: '', Thoughts: '' }

  this.loadBooks()
},

  async deleteBook(id) {
  const tableName = this.WillJess === 0 ? 'WillBooks' : 'JessBooks'

  await client
    .from(tableName)
    .delete()
    .eq('id', id)

  this.loadBooks()

  this.dddBook = null
}
}
})

app.mount('#app')
