import { checkHealth } from '../check_health.js';

test ('health = 51', () => {
    const character = {name: 'Маг', health: 51};
    const result = checkHealth(character);
    expect(result).toBe("healthy");
});

test ('health = 50', () => {
    const character = {name: 'Маг', health: 50};
    const result = checkHealth(character);
    expect(result).toBe("wounded");
});

test ('health = 45', () => {
    const character = {name: 'Маг', health: 45};
    const result = checkHealth(character);
    expect(result).toBe("wounded");
});

test ('health = 15', () => {
    const character = {name: 'Маг', health: 15};
    const result = checkHealth(character);
    expect(result).toBe("wounded");
});

test ('health = 10', () => {
    const character = {name: 'Маг', health: 10};
    const result = checkHealth(character);
    expect(result).toBe("critical");
});

