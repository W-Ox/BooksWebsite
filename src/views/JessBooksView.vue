<template>
    <div>
        <div class="header">
            <h1>Jess's Books</h1>
            <button class="add-btn">+ Add Book</button>
        </div>
        <BookTable :books="books"/>
    </div>
</template>



<script>
import BookTable from '../components/BookTable.vue';

export default {
    name: 'JessBooksView',
    data() {
        return {
            books: [

            ]
        }
    },
    components: {
        BookTable
    }
}
</script>