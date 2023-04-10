import { PokeTypesEnum } from '@/enum/poke-types.enum';

export const utils = {
    setTypeClasses(): void {
        const types = PokeTypesEnum;
        const elements = document.getElementsByClassName('type');
        for (const el of elements) {
            switch (el.innerHTML) {
                case types.NORMAL:
                    el.classList.add(types.NORMAL);
                    break;
                case types.FIRE:
                    el.classList.add(types.FIRE);
                    break;
                case types.FIGHTING:
                    el.classList.add(types.FIGHTING);
                    break;
                case types.WATER:
                    el.classList.add(types.WATER);
                    break;
                case types.FLYING:
                    el.classList.add(types.FLYING);
                    break;
                case types.GRASS:
                    el.classList.add(types.GRASS);
                    break;
                case types.POISON:
                    el.classList.add(types.POISON);
                    break;
                case types.ELECTRIC:
                    el.classList.add(types.ELECTRIC);
                    break;
                case types.GROUND:
                    el.classList.add(types.GROUND);
                    break;
                case types.PSYCHIC:
                    el.classList.add(types.PSYCHIC);
                    break;
                case types.ROCK:
                    el.classList.add(types.ROCK);
                    break;
                case types.ICE:
                    el.classList.add(types.ICE);
                    break;
                case types.BUG:
                    el.classList.add(types.BUG);
                    break;
                case types.DRAGON:
                    el.classList.add(types.DRAGON);
                    break;
                case types.GHOST:
                    el.classList.add(types.GHOST);
                    break;
                case types.DARK:
                    el.classList.add(types.DARK);
                    break;
                case types.STEEL:
                    el.classList.add(types.STEEL);
                    break;
                case types.FAIRY:
                    el.classList.add(types.FAIRY);
                    break;
                default:
                    break;
            }
        }
    },
}