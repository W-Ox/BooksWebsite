
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
            newBook: {
              Title: '',
              Author: '',
              Year: '',
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
  if (!this.showingBook) return

  if (event.key === 'Escape') {
    this.closeBook()
  }
},

  async addBook() {
  const tableName = this.WillJess === 0 ? 'WillBooks' : 'JessBooks'

  await client
    .from(tableName)
    .insert([
      { 
        Title: this.newBook.Title,
        Author: this.newBook.Author,
        Year: this.newBook.Year,
        Rating: this.newBook.Rating,
        Thoughts: this.newBook.Thoughts
      }
    ])

  this.newBook = { Title: '', Author: '', Year: '', Rating: '', Thoughts: '' }
  this.showAdd = false
  this.loadBooks()
},

  openBook(book) {
    this.showingBook = book
  },
  closeBook() {
    this.showingBook = null
  },

  async deleteBook(id) {
  const tableName = this.WillJess === 0 ? 'WillBooks' : 'JessBooks'

  await client
    .from(tableName)
    .delete()
    .eq('id', id)

  this.loadBooks()
}
}
})

app.mount('#app')
