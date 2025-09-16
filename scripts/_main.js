// ARX javascript (adapted for Farmer CU)

// Imports - Minecraft
import { system, world, EntityComponentTypes, EquipmentSlot, Player } from "@minecraft/server"

import { onFoodConsume } from './food/onConsume'

// Триггер при запуске мира
system.beforeEvents.startup.subscribe(initEvent => {
    // Регистрируем кастомные компоненты 

    initEvent.blockComponentRegistry.registerCustomComponent('arx:blockInteration', {
        onPlayerInteract(event) { // Взаимодействие с блоком через ПКМ
            let executeOnBlockPosition = `execute positioned ${event.block.location.x} ${event.block.location.y} ${event.block.location.z} run `
            switch (event.block.type.id) {

                // Растение хлопка - пример
                // case "arx:cotton_plant": // Дропаем лут с растения хлопка при ПКМ
                //     if (event.block.permutation.getState("arx:growth_stage") == 6) { // Проверям, не вырос ли уже до конца
                //         event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", 4))
                //         event.player.runCommand(executeOnBlockPosition + `loot spawn ~ ~ ~ loot "blocks/nature/cotton_plant_mature"`)
                //     }
                //     break
            }
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent('arx:onRandomTick', {
        onRandomTick(event) { // Рандомное тиканье блока
            let executeOnBlockPosition = `execute positioned ${event.block.location.x} ${event.block.location.y} ${event.block.location.z} run `
            switch (event.block.type.id) {

                //Расстения Farmer CU (Zelenchik)

                // Растение Риса
                case "arx:growing_rice":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.2) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break

                // Каррец
                case "arx:growing_karrec":
                    if (event.block.permutation.getState("arx:growth_stage") < 7 && Math.random() < 0.07) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break

                // Растение голубики
                case "arx:growing_blueberry":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.15) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break

                // Растущие АРКС Растения/Growing ARX Plant
                case "arx:growing_kavra":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                case "arx:growing_kaspora":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                case "arx:growing_karelo":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                case "arx:growing_dragon_pion":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                    case "arx:growing_day_kosk":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                    case "arx:growing_fioletic":
                    if (event.block.permutation.getState("arx:growth_stage") < 6 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                    case "arx:growing_fiuli":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                    case "arx:growing_fok":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                    case "arx:growing_golden_hay":
                    if (event.block.permutation.getState("arx:growth_stage") < 3 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                    case "arx:growing_jackal_grass":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                    case "arx:growing_kari":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                    case "growing_mp_flower":
                    if (event.block.permutation.getState("arx:growth_stage") < 5 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                    case "arx:growing_night_kosk":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                    case "arx:growing_snowflower":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                    case "arx:growing_wolf_death":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break
                    case "arx:growing_yuan":
                    if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.1) {
                        event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                    }
                    break

                    

            }
        }
    });

    initEvent.itemComponentRegistry.registerCustomComponent('arx:onConsume', {
        onConsume(event) { // Юзание предмета на ПКМ
            onFoodConsume(event.source, event.itemStack.typeId)
        }
    });
});