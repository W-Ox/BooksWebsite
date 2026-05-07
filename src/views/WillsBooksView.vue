<template>
    <div>
        <div class="header">
            <h1>Will's Books</h1>
            <button class="add-btn">+ Add Book</button>
        </div>
        <BookTable :books="books"/>
    </div>
</template>



<script>
import BookTable from '../components/BookTable.vue';
import { supabase } from '../supabase'

export default {
    name: 'WillsBooksView',
    data() {
        return {
            books: []
        }
    },
    async mounted() {
        const { data, error } = await supabase
            .from('WillBooks')
            .select('*')
        if (error) {
            console.error('Error fetching books:', error)
        } else {
            this.books = data
        }
    },
    components: {
        BookTable
    }
}
</script>
