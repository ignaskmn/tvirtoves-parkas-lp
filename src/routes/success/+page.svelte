<script>
  import logo from "$lib/images/logo.png";
</script>

<div class="hero-container">
  <div class="logo-container flex1">
    <div class="logo">
      <img src={logo} alt="Tvirtovės Parkas" />
    </div>
    <h2>Kauno <br /> tvirtovės <br /> parkas</h2>
  </div>
  <div class="info">
    <h3>Užklausa sėkmingai išsiųsta</h3>
    <h2>Greitai su Jumis susisieksime</h2>
  </div>
  <div class="introduction flex1">
    <h1 class="hash-tag">#</h1>
    <h1>laisvas <br /> plotas</h1>
  </div>
</div>

<style>
  .hero-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: space-around;
  }

  .info {
    text-align: center;
  }

  h1 {
    text-align: left;
    font-size: 3rem;
    margin: 3rem 0;
  }

  .hash-tag {
    font-size: 8rem;
    margin-right: 1rem;
    color: var(--color-theme-1);
  }

  h2 {
    font-size: 2rem;
    margin: 0;
  }

  .introduction {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .flex1 {
    flex-grow: 1;
    flex-basis: 0;
  }

  .logo {
    display: flex;
    align-items: center;
    height: 10rem;
    width: 10rem;
  }

  .logo img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
  }
</style>
