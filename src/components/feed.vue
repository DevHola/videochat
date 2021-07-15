<template>
    <video controls autoplay playsinline :srcObject.prop="item.srcObject" :muted="item.muted" :id="item.id">
    </video>
</template>
<script>
export default {
    props: ['item']
}
</script>