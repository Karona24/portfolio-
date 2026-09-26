<template>
  <RouterView/>
</template>

<script setup>
import { onMounted, onUnmounted, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import AOS from 'aos';

const route = useRoute();

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

  nextTick(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 30,       
      disable: false    
    });
    AOS.refresh();
  });
});

// Refresh AOS រាល់ពេលប្តូរ Page
watch(() => route.path, () => {
  setTimeout(() => {
    AOS.refresh();
  }, 100);
});

onUnmounted(() => {
  window.removeEventListener('contextmenu', preventInspect);
  window.removeEventListener('keydown', preventInspect);
});
</script>