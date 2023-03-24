<script setup>
    defineProps(['student'])
</script> 

<template>
    <section class="card">
        <article class="info">
            <div class="name">{{student.name}} {{student.surname}} {{student.class}}</div>
            <div class="age">{{student.age}} <span >year</span></div>
        </article>
    </section>
</template>

<style scoped>
  .card {
		background: rgba(255,255,255, 1);
		border: 1px solid #bbb;
		color: #444;
		box-shadow: 0 3px 5px rgba(0,0,0,.2);
		border-top-width: 5px;
		border-top-color: dodgerblue;
	}
  .info {
		padding: 1rem;
		text-align: center;
		font-size: 1.3rem;
	}
	.age {
		font-weight: 300;
		font-size: 1rem;
	}
</style>
