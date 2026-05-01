const app = Vue.createApp({
    data() {
        return {
            books: [
                {ind:0,title:'The Witcher (series)', author:'Andrzej Sapkowski', year:'2023-2024', showThoughts: false, thoughts: 'Loved the whole series.', rating: 9},
                {ind:1,title:'Mythos', author:'Stephen Fry', year:2025, showThoughts : false, thoughts : 'This was really enjoyable, although the many names and many short stories towards the end became difficult to take in.', rating : 7},
                {ind:2,title:'Heroes', author:'Stephen Fry', year:2025, showThoughts : false, thoughts : 'This was a good book, introducing us to some of those well-known names in Greek stories, and I think an improvement on the first in the series - Mythos.', rating : 7},
                {ind:3,title:'All Quiet On The Western Front', author:'Erich Remarque', year:2025, showThoughts : false, thoughts : 'This book was really interesting and quite an easy read for a war book. It is fairly short, but really captures some of the horror of the first world war from a stanard soldiers perspective.', rating : 9},
                {ind:4,title:'A Brief History of Time', author:'Stephen Hawking', year:2026, showThoughts : false, thoughts : 'This book is pitched at a really nice level, for myself who has been exposed to some of the mathematics behind this material but has not thought about it for a long time. It is a really interesting read, although can get complicated and difficult to understand at times.', rating : 7},
                {ind:5,title:'Troy', author:'Stephen Fry', year:2026, showThoughts : false, thoughts : 'I really enjoyed this book, it was fairly difficult to start with as there are so many players and new names, and it jumps from side to side, but once the pieces are in place, it is a fantastic story and an easy read.', rating : 9},
                {ind:6,title:'Odyssey', author:'Stephen Fry', year:2026, showThoughts : false, thoughts : 'A similar experience to that of "Troy", although slightly easier to read as the characters are already in place from that earlier entry in the series, I found the story so interesting along with the nature in which it is told. An excellent book.', rating : 10},
                {ind:7,title:'The Princess Bride', author:'William Goldman', year:2026, showThoughts : false, thoughts : 'Just a fantastic story told in such a charming way.', rating : 9},
                {ind:8,title:'As Leeds Go Marching On', author:'Jonny Cooper', year:2026, showThoughts : false, thoughts : 'Despite being base on stats, this book does an excellent job at telling the story of Leeds United through history, and it is done in a fun and light-hearted way.', rating : 7},
                {ind:9,title:'Brief Answers To The Big Questions', author:'Stephen Hawking', year:2026, showThoughts : false, thoughts:'This books covers a range of topics and is presented in a way which is easy to read. The thoughts can get a bit repetitive especially with some questions being similar, though.', rating : 7},
                {ind:10,title:'Enemy At The Gates', author:'William Craig', year: '-- In Progress --', showThoughts : false,  thoughts : 'Still in progress, but enjoying it so far.', rating : '-'},
                {ind:11,title:'The Satsuma Complex', author:'Bob Mortimer', year: '-- Waiting List --', showThoughts : false, thoughts : 'n/a', rating : '-'},
                {ind:12,title:'The Shortest History of England', author:'James Hawes', year: '-- Waiting List --', showThoughts : false, thoughts : 'n/a', rating : '-'},
                {ind:13,title:'Catch 22', author:'Joseph Heller', year: '-- Waiting List --', showThoughts : false, thoughts : 'n/a', rating : '-'},
                {ind:14,title:'The Penguin Book of Norse Myths', author:'Kevin Crossley-Holland', year: '-- Waiting List --', showThoughts : false, thoughts : 'n/a', rating : '-'}
            ],
            showingBook:-1
        }
    },
    methods: {
        toggleShowThoughts(b) {
            if (this.showingBook===b.ind) {
                b.showThoughts=false
                this.showingBook=-1
            }
            else if (this.showingBook>0) {
                this.books[this.showingBook].showThoughts=false
                this.showingBook = b.ind
                b.showThoughts = true
            }
            else {
                this.showingBook = b.ind
                b.showThoughts = true
            }

        }
    }
})

app.mount('#app')