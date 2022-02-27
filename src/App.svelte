<script>
  import { fly, fade } from "svelte/transition";
  import * as eases from "svelte/easing";

  const sun = "./images/sun.png";
  const moon = "./images/moon.png";
  let mode = false;

  const toggle = () => {
    window.document.body.classList.toggle("dark");
    mode = !mode;
  };

  const fetchadvice = async () => {
    let res = await fetch("https://api.adviceslip.com/advice");
    let adviceslip = await res.json();
    return adviceslip;
  };

  let advice = fetchadvice();

  const refreshadvice = async () => {
    advice = await fetchadvice();
  };
</script>

<main>
  <button class="mode-toggle-switch" on:click|preventDefault={toggle}>
    {#key mode}
      <img
        in:fly={{
          y: -20,
          x: -25,
          duration: 1000,
          easing: eases.backInOut,
        }}
        src={mode ? moon : sun}
        alt="mode"
      />
    {/key}
  </button>
  <div class="wrapper">
    {#await advice}
      <div>Loading</div>
    {:then data}
      <div class="advice">
        {#key data.slip.id}
          <p
            in:fly={{
              y: -100,
              duration: 1500,
              easing: eases.backInOut,
            }}
          >
            ADVICE # {data.slip.id}
          </p>
        {/key}
        {#key data.slip.advice}
          <h1
            in:fly={{
              y: -50,
              duration: 1500,
              easing: eases.backInOut,
              delay: 500,
            }}
          >
            <q>
              {data.slip.advice}
            </q>
          </h1>
        {/key}
      </div>
    {:catch error}
      <h2 style:color="red">{error.message}</h2>
    {/await}
    <div class="dividerline" />
  </div>
  <button class="refresh" on:click|preventDefault={refreshadvice}>
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      class="diceimg"
    >
      <path
        d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
      />
    </svg>
  </button>
</main>

<style>
  :global(body) {
    color: rgb(36, 36, 36);
    background-image: url("/images/background-light.png");
    background-position: center;
    transition: background-image 1s ease-in-out;
  }

  :global(body.dark) {
    color: white;
    background-image: url("/images/background-dark.png");
    background-position: center;
  }

  main {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .mode-toggle-switch {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.3);
    border: 0;
    border-radius: 1rem;
    transition: background-color 1s ease-in-out;
  }

  .mode-toggle-switch:active {
    transform: translateY(4px);
  }

  :global(body.dark) .mode-toggle-switch {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .wrapper {
    display: flex;
    min-height: 300px;
    max-width: 512px;
    flex-direction: column;
    justify-content: center;
    margin: 0 2rem;
    align-items: center;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.3);
    transition: all 1s ease-in-out;
  }

  :global(body.dark) .wrapper {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .advice {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center;
    padding: 3rem;
  }

  .advice p {
    letter-spacing: 4px;
    font-size: 18px;
  }

  .advice h1 {
    margin: 2rem 0 4rem;
  }

  .dividerline {
    position: relative;
    top: -3rem;
    height: 1px;
    width: 86%;
    background-color: black;
    transition: all 1s ease-in-out;
  }

  :global(body.dark) .dividerline {
    background-color: white;
  }

  .refresh {
    position: relative;
    top: -26px;
    width: 52px;
    height: 52px;
    border: 0;
    padding: 14px;
    border-radius: 50%;
    transition: background-color 1s ease-in-out;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(16px);
  }

  :global(body.dark) .refresh {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(16px);
  }

  .refresh:hover {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
  }

  :global(body.dark) .refresh:hover {
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.8);
  }

  .refresh:active {
    transform: translateY(4px);
  }

  .diceimg {
    height: 100%;
    width: 100%;
    fill: #202733;
    transition: all 1s ease-in-out;
  }

  :global(body.dark) .diceimg {
    fill: azure;
  }

  @media (max-width: 768px) {
    :global(body) {
      background-image: url("/images/background-light-tablet.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    :global(body.dark) {
      background-image: url("/images/background-dark-tablet.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  @media (max-width: 425px) {
    :global(body) {
      background-image: url("/images/background-light-mobile.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    :global(body.dark) {
      background-image: url("/images/background-dark-mobile.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
</style>
