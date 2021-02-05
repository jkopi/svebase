<div class="box">
  <slot />
</div>

<style>
  .box {
    padding: 0;
    width: 1070px;
    margin: auto;
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    border: 1px solid GREY;
  }

  @media only screen and (max-width: 1070px) {
    .box {
      width: 100%;
    }
  }
</style>
