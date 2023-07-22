<script lang="ts">
    import { get_twemoji_url } from "./utils";
	export let emoji: string;
	export let selected: boolean;
    export let found: boolean;
</script>

<div class="square" class:flipped={selected}>
	<button on:click />
    {#if !found}
        <img alt={emoji} src={get_twemoji_url(emoji)} />
    {/if}
</div>

<style>
	.square {
		background: yellow;
		display: flex;
		justify-content: center;
        align-items: center;
        transition: transform 0.5s;
        transform-style: preserve-3d;
    }

    .flipped {
        transform: rotateY(180deg);
    }

	button {
		position: absolute;
		width: 100%;
		height: 100%;
        backface-visibility: hidden;
    }

    img {
        height: 6em;
        width: 6em;
        pointer-events: none;
        transform: rotateY(180deg);
        backface-visibility: hidden;
    }

</style>
