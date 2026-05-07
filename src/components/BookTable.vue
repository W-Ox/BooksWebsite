<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year Read</th>
                <th>Rating</th>
                <th>Thoughts</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="book in books" :key="book.id">
                <td>{{ book.Title }}</td>
                <td>{{ book.Author }}</td>
                <td>{{ book.YearRead }}</td>
                <td>{{ book.Rating }}</td>
                <td><button class="review-btn" @click="selectedBook = book">Show Thoughts</button></td>
                <td class="actions">
                    <button class="icon-btn">✏️</button>
                    <button class="icon-btn">🗑️</button>
                </td>
            </tr>
            </tbody>
        </table>

        <BookDetailModal v-if="selectedBook" :book="selectedBook" @close="selectedBook = null"/>

    </div>
</template>


<script>
import BookDetailModal from './modals/BookDetailModal.vue'

export default {
    name: 'BookTable',
    components: {
    BookDetailModal
    },
    props: {
        books: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedBook: null
        }
    }
}
</script>


<style scoped>
.actions {
  display: flex;
  gap: 2px;
  justify-content: center;
}

.icon-btn {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
}

.icon-btn:hover {
  opacity: 0.4;
}

.icon-btn:active {
  outline: 2px solid black;
  border-radius: 4px;
}

.review-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.2s ease;
}

.review-btn:hover {
  opacity: 0.4;
}
</style>