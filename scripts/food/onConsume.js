export function onFoodConsume(player, foodname) {
    // Тип пищи у конкретной съеденной еды
    let foodType
    let foodTaste

    const playerTaste_meat = player.getDynamicProperty('playerTaste_meat')
    const playerTaste_fish = player.getDynamicProperty('playerTaste_fish')
    const playerTaste_bread = player.getDynamicProperty('playerTaste_bread')
    const playerTaste_dairy = player.getDynamicProperty('playerTaste_dairy')
    const playerTaste_herbal = player.getDynamicProperty('playerTaste_herbal')
    const playerTaste_sweet = player.getDynamicProperty('playerTaste_sweet')

    // Далее в объектах хранится еда и её вкусность
    // Структура объекта "id еды": вкусность

    // Первые три еды в каждом объекте - примеры
    const meatFood = {
        "arx:bears_potato": 65,
        "arx:bloody_steak": 60,
        "arx:borsch": 60,

        "arx:forcemeat": 20,
    }
    const fishFood = {
        "arx:devil_soup": 95,
        "arx:electrodinner": 85,
        "arx:fish_crisps": 20,
    }
    const breadFood = {
        "arx:allaybread": 40,
        "arx:apple_pie": 60,
        "arx:bandit_pie": 55,
    }
    const dairyFood = {
        "arx:cheese": 55,
        "arx:curd": 20,
        "arx:kefir": 35,
    }
    const herbalFood = {
        "arx:baked_apple": 15,
        "arx:cactus_soup": 15,
        "arx:crisps": 35,
    }
    const sweetFood = {
        "arx:caramel": 23,
        "arx:chocolate_bar": 27,
        "arx:chocolate_cubes": 36,
    }

    // Мы определяем, какой тип у нашей еды и какая вкусность
    if (Object.keys(meatFood).includes(foodname)) { foodType = 'meat'; foodTaste = meatFood[foodname] }
    if (Object.keys(fishFood).includes(foodname)) { foodType = 'fish'; foodTaste = fishFood[foodname] }
    if (Object.keys(breadFood).includes(foodname)) { foodType = 'bread'; foodTaste = breadFood[foodname] }
    if (Object.keys(dairyFood).includes(foodname)) { foodType = 'dairy'; foodTaste = dairyFood[foodname] }
    if (Object.keys(herbalFood).includes(foodname)) { foodType = 'herbal'; foodTaste = herbalFood[foodname] }
    if (Object.keys(sweetFood).includes(foodname)) { foodType = 'sweets'; foodTaste = sweetFood[foodname] }

    // Проводим особые операции, если это требуется

    switch (foodname) {
        case "arx:iron_pie": { // ПРИМЕР
            player.runCommand(`tellraw @s { "rawtext": [ { "text": "§cВ пирожке что-то острое!" } ] }`)
            player.runCommand(`effect @s fatal_poison infinite 255 true`)
            break
        }
    }

    // Вычисляем полученное счастье, если тип еды не undefined и не potion. То есть мы едим еду, а не что-то ещё
    if (foodType !== undefined && foodType !== "potion") {
        player.sendMessage(`JS -> съедена еда ${foodname} типа ${foodType} с вкусом ${foodTaste}`)
    }
    // Проблема с едой
    else if (foodType === undefined) {
        console.warn(`Съедена еда ${foodname}, которая не идентефицирована в списках еды.`)
    }
}