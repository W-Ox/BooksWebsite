<template>
  <div class="overlay" @click="$emit('close')">
    <div class="modal" @click.stop>
      <button class="close-btn" @click="$emit('close')">✕</button>
      <h2>{{ book.Title }}</h2>
      <p>{{ book.Thoughts }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'BookDetailModal',
    props: {
        book: {
            type: Object,
            required: true
        }
    },
    mounted() {
        window.addEventListener('keydown', this.handleKeyDown)
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    },
    methods: {
        handleKeyDown(e) {
            if (e.key === 'Escape') this.$emit('close')
        }
    }
}
</script>