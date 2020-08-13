<template>
  <div>
    <adu />
  </div>
</template>

<script>
import CardSkeleton from '../../components/skeleton/CardSkeleton'
export default {
  layout: 'default',
  components: {
    adu: CardSkeleton,
  },
}
</script>
