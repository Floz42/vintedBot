<template>
    <div class="vinted-bot card-bot">
        <Edit
            class="bot-settings"
            @click="handleClick"
        />
        <h1>Vinted Bot</h1>
        <p>This is a simple bot for Vinted.</p>
        <img
            class="image-bot"
            src="../assets/img/bot.png"
            alt="bot"
            :style=imageStyle
        >
        <ElCheckboxButton
            v-model="isActive"
            size="large"
            class="checkbox-bot"
            type="warning"
            :style="imageStyle"
            @change="handleCheckboxChange">
            {{ isActive ? 'Stop Bot' : 'Start Bot' }}
        </ElCheckboxButton>
        <p v-if="isActive">The bot is currently running.</p>
        <p v-else>The bot is currently resting (zzZzZ).</p>

    </div>
</template>
<script setup lang="ts">
import { ElCheckboxButton } from 'element-plus'
import { Edit } from '@element-plus/icons-vue'
import { ref, computed } from 'vue';

const props = defineProps<{ bgImage: string, name: string }>();
const imageStyle = computed(() => ({
  background: convertColorToRvba(props.bgImage, 0.5),
}))
const emit = defineEmits(['edit']);

const handleClick = () => {
    emit('edit', 'vintedBot');
};

const convertColorToRvba = (color: string, opacity: number = 0.5) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const isActive = ref(false);
const handleCheckboxChange = () => {
    //add the logic here
};
</script>