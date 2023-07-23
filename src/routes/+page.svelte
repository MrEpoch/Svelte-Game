<script lang="ts">
    import { confetti } from "@neoconfetti/svelte";
    import Game from './Game.svelte';
	import '../styles.css';
	import Modal from './Modal.svelte';
    import { levels } from './levels';

    export let state: 'waiting' | 'playing' | 'won' | 'paused' | 'lost' = 'waiting';
    let game: Game;
</script>

<Game 
    bind:this={game} 
    on:play={() => state = 'playing'}
    on:pause={() => state = 'paused'}
    on:win={() => state = 'won'}
    on:lose={() => state = 'lost'}
/>

{#if state !== 'playing'}
    <Modal>
        <header>
            <h1>e<span>match</span>i</h1>
            <p>The emoji matching game</p>
        </header>

        {#if state === 'won' || state === 'lost'}
            <p>You {state} the game!</p>
        {:else if state === 'paused'}
            <p>Game paused</p>
        {:else if state === "waiting"}
            <p>Choose a level</p>
        {/if}

        <div class="buttons">
            {#if state === 'paused'}
                <button on:click={() => game.resume()}>Resume</button>
                <button on:click={() => state = "waiting"} >Quit</button>
            {:else}
                {#each levels as level}
                    <button on:click={() => { game.start(level) }}>{level.label}</button>
                {/each}
            {/if}
        </div>
    </Modal>    
{/if}


{#if state === 'won'}
    <div class="confetti" use:confetti={{
        stageWidth: innerWidth,
        stageHeight: innerHeight
    }}>
        
    </div>
{/if}

<style>
    h1 {
        font-size: 3em;
    }

    h1 span {
        color: purple;
    }

    header p {
        font-family: 'Grandstander', cursive;
    }

    .buttons button {
        background: black;
        font-size: 1.5em;
        padding: 0.5em 1em;
        border-radius: 0.5em;
        border: 0;
        color: white;
        cursor: pointer;
        margin: 0.5em;
    }

    .confetti {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }

</style>
