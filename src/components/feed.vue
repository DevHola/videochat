<template>
    <video controls autoplay playsinline :srcObject.prop="feed.srcObject" :muted="feed.muted" :id="feed.id">
    </video>
</template>
<script>
export default {
    props: ['feed']
}
</script>