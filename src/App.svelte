<script>
    let value = `#1abc9c,#2ecc71,#3498db,#9b59b6,#34495e\n#16a085,#27ae60,#2980b9,#8e44ad,#2c3e50\n#f1c40f,#e67e22,#e74c3c,#ecf0f1,#95a5a6\n#f39c12,#d35400,#c0392b,#bdc3c7,#7f8c8d`;
    let hexcodeArray;
    let boxStyles;

    let re0 = /^#[0-9A-F]{3}$/i;
    let re1 = /^#[0-9A-F]{4}$/i;
    let re2 = /^#[0-9A-F]{6}$/i;
    let re3 = /^#[0-9A-F]{8}$/i;

    function updateArray() {
        hexcodeArray = value.replace(/"/g, "").trim().split(/[\n\s,]+/);
        boxStyles = hexcodeArray.map(function(item){
            if (re0.test(item) | re1.test(item) | re2.test(item) | re3.test(item)) {
                return [item, "none"];
            } else {
                return ["#ffffff", "line-through"];
            }
        })
    }
    updateArray();
</script>

<main>
    <h1>Quickly visualize a list of hex color codes</h1>

    <textarea bind:value={value} on:input={updateArray}></textarea>

    <div class="box-region">
        {#each hexcodeArray as color, i}
        <div class="box" style="background-color:{boxStyles[i][0]}; text-decoration:{boxStyles[i][1]};">
            {color}
        </div>
        {/each}
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Outfit&display=swap");
    main {
        font-family: "Outfit", sans-serif;
        text-align: center;
    }
    textarea {
        width: 90%;
        height: 110px;
        max-width: 500px;
    }
    .box-region {
        padding: 25px 100px 0px;
    }
    .box {
        padding: 10px;
        width: 120px;
        height: 120px;
        display: inline-block;
    }
    @media (max-width: 1000px) {
        .box-region {
        padding: 25px 0 0px;
        }
        .box {
        padding: 10px;
        width: 80px;
        height: 80px;
        }
        h1 {
        font-size: 1em;
        }
    }
</style>
