<template>
  <RouterView/>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const preventInspect = (e) => {
  if (e.type === 'contextmenu') {
    e.preventDefault();
  }

  if (e.type === 'keydown') {
    const isDevKey = 
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) ||
      (e.ctrlKey && ['U', 'u', 'S', 's'].includes(e.key));

    if (isDevKey) {
      e.preventDefault();
    }
  }
};

onMounted(() => {
  window.addEventListener('contextmenu', preventInspect);
  window.addEventListener('keydown', preventInspect);
});

onUnmounted(() => {
  window.removeEventListener('contextmenu', preventInspect);
  window.removeEventListener('keydown', preventInspect);
});
</script>