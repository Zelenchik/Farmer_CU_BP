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

                // ПРИМЕРЫ

                // // Растение чая
                // case "arx:tea_corp":
                //     if (event.block.permutation.getState("arx:growth_stage") < 4 && Math.random() < 0.15) { // Проверям, не вырос ли уже до конца
                //         event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                //     }
                //     break

                // // Ванильные растения
                // case "arx:beetroots":
                //     if (event.block.permutation.getState("arx:growth_stage") < 3 && Math.random() < 0.2) { // Проверям, не вырос ли уже до конца
                //         event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                //     }
                //     break
                // case "arx:carrots":
                //     if (event.block.permutation.getState("arx:growth_stage") < 3 && Math.random() < 0.2) { // Проверям, не вырос ли уже до конца
                //         event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                //     }
                //     break
                // case "arx:potatoes":
                //     if (event.block.permutation.getState("arx:growth_stage") < 3 && Math.random() < 0.2) { // Проверям, не вырос ли уже до конца
                //         event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                //     }
                //     break

                // // Хлопок
                // case "arx:cotton_plant":
                //     if (event.block.permutation.getState("arx:growth_stage") < 6 && Math.random() < 0.07) { // Проверям, не вырос ли уже до конца
                //         event.block.setPermutation(event.block.permutation.withState("arx:growth_stage", event.block.permutation.getState("arx:growth_stage") + 1))
                //     }
                //     break
            }
        }
    });

    initEvent.itemComponentRegistry.registerCustomComponent('arx:onConsume', {
        onConsume(event) { // Юзание предмета на ПКМ
            onFoodConsume(event.source, event.itemStack.typeId)
        }
    });
});