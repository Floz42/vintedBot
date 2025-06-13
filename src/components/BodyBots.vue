<template>
    <div class="bots-container">
        <VintedBot @edit="editBot" bgImage="03f37f" name="vintedBot"/>
        <VintedBot @edit="editBot" bgImage="03b9f3" name="coucou"/>
        <VintedBot @edit="editBot" bgImage="f3c403" name="coucou2"/>
    </div>
    <div v-if="currentBot" class="bot-details">
        <h2>Details for {{ currentBot }}</h2>
    </div>
    <!-- You can add more bots here -->
    <!-- <OtherBot /> -->
    <!-- <AnotherBot /> -->

</template>
<script setup lang="ts">
import VintedBot from './VintedBot.vue';
import { ref } from 'vue';


const currentBot = ref<string | null>(null);
const editBot = (page: string) => {
    if (currentBot.value) {
        currentBot.value = null; // Deselect if the same bot is clicked
    } else {
        currentBot.value = page; // Select the bot
    }
    console.log('Edit page:', page);
    // Add your logic to handle the edit action here
};
</script>