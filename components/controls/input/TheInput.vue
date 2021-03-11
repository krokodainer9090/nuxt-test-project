<script>
const numberRegex = /^\d*$/;

export default {
  name: 'TheInput',

  props: {
    id: {
      type: Number,
      default: 1
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    min: {
      type: Number,
      default: 0
    }
  },

  computed: {
    isNumberInput () {
      return this.type === 'number';
    }
  },

  mounted () {
    if (this.isNumberInput) { this.numberEventListener(); }
  },

  destroyed () {
    if (this.isNumberInput) { this.numberEventListener(true); }
  },

  methods: {
    numberEventListener (unbind = false) {
      if (!this.$refs.input) { return; }

      if (unbind) {
        this.$refs.input.removeEventListener('keypress');

        return;
      }

      this.$refs.input.addEventListener('keypress', function (e) {
        const isNumber = numberRegex.test(e.target.value);

        if ( !e.target.value ) {
          e.target.value = 0;

          return;
        }

        if ( !isNumber ) {
          e.preventDefault();
        }
      });
    },

    getValue ({ target }) {
      this.$emit('input', target.value);
    }
  }
};
</script>

<template>
  <div class="input__container">
    <input
      :id="id"
      ref="input"
      :type="type"
      :value="value"
      :min="min"
      class="input"
      @input="getValue"
    >
  </div>
</template>

<style lang="scss">
@import "../../../styles/components/controls/the-input";
</style>
