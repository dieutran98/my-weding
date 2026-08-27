<script setup lang="ts">
import CoupleIntroduction from './components/wedding/CoupleIntroduction.vue'
import FloatingNav from './components/wedding/FloatingNav.vue'
import HeartRain from './components/wedding/HeartRain.vue'
import LoadingScreen from './components/wedding/LoadingScreen.vue'
import LoveQuote from './components/wedding/LoveQuote.vue'
import RSVPForm from './components/wedding/RSVPForm.vue'
import WeddingCalendar from './components/wedding/WeddingCalendar.vue'
import WeddingCountdown from './components/wedding/WeddingCountdown.vue'
import WeddingDate from './components/wedding/WeddingDate.vue'
import WeddingEvents from './components/wedding/WeddingEvents.vue'
import WeddingFamilies from './components/wedding/WeddingFamilies.vue'
import WeddingFooter from './components/wedding/WeddingFooter.vue'
import WeddingHero from './components/wedding/WeddingHero.vue'
import WeddingMessage from './components/wedding/WeddingMessage.vue'
</script>

<template>
  <LoadingScreen />
  <FloatingNav />
  <HeartRain />

  <main>
    <WeddingHero />
    <WeddingDate />
    <WeddingFamilies />
    <CoupleIntroduction />
    <WeddingEvents />
    <WeddingCalendar />
    <WeddingMessage />
    <WeddingCountdown />
    <LoveQuote />
    <!-- <RSVPForm /> -->
    <WeddingFooter />
  </main>
</template>
