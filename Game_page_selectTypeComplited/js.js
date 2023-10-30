
<script>
    const map1 = document.querySelector('.map1');

    map1.addEventListener('focus', () => {
    map1.style.transform = 'translateZ(0)';
});

    map1.addEventListener('blur', () => {
    map1.style.transform = 'none';
});
</script>
