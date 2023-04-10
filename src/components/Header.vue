<template>
    <div class="header">
        <div class="header-logo">
            <img class="header-logo" src="@/assets/images/pokevue-logo.svg" alt="">
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Header',
        data() {
            return {}
        }
    });
</script>

<style lang="scss">
    .header {
        .header-logo {
            width: 20rem;
            display: block;
            margin: 1rem auto;
        }
    }
</style>