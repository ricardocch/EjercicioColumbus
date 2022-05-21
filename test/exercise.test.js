const {
    getArray
  } = require('../index.js');
  
  describe('Should return linear array', function() {
    it('should return [1, 2, 3, 4, 5]', function() {
      expect(getArray([1, [2, [3, [4, 5]]]])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return [6, 1, 2, 3, 4, 5]', function() {
      expect(getArray([1, [2, [3, [4, 5]]]])).toEqual([6, 1, 2, 3, 4, 5]);
    });

    it('should return [1, 2, 3, 4, 5]', function() {
      expect(getArray([[[1, 2,], 3], 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

  });
  
