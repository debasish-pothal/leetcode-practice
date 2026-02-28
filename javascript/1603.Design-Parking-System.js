/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
class ParkingSystem {
  constructor(big, medium, small) {
    this.spaces = [big, medium, small];
  }

  /**
   * @param {number} carType
   * @return {boolean}
   */
  addCar(carType) {
    if (this.spaces[carType - 1] > 0) {
      this.spaces[carType - 1] -= 1;
      return true;
    }

    return false;
  }
}
