const {
    getLinearArray
  } = require('../index.js');
  
  describe('Should return linear array', function() {
    it('should return [1, 2, 3, 4, 5]', function() {
      expect(getLinearArray([1, [2, [3, [4, 5]]]])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return [6, 1, 2, 3, 4, 5]', function() {
      expect(getLinearArray([6, [1, [2, 3], 4], 5])).toEqual([6, 1, 2, 3, 4, 5]);
    });

    it('should return [1, 2, 3, 4, 5]', function() {
      expect(getLinearArray([[[1, 2,], 3], 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

  });

  describe('Should return false', function() {
    it('should´t accept strings', function() {
      expect(getLinearArray("hola")).toBeFalsy();
    });

    it('should´t accept numbers', function() {
      expect(getLinearArray(233)).toBeFalsy();
    });

    it('should´t accept object', function() {
      expect(getLinearArray({a:123})).toBeFalsy();
    });

    it('should´t accept booleans', function() {
      expect(getLinearArray(true)).toBeFalsy();
      expect(getLinearArray(false)).toBeFalsy();
    });

  });
  
