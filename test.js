var stupid = require('./stupid_v2')

var expect = require('chai').expect

describe('stupid lists', function() {
  it('empty list', function() {
    expect( stupid.list.sort([]) ).to.deep.eql( [] )
  })

  it('list with one item', function() {
    expect( stupid.list.sort([0]) ).to.deep.eql( [0] )
  })

  it('list with two items', function() {
    expect( stupid.list.sort([1, 0]) ).to.deep.eql( [0, 1] )
  })

  it('playground', function() {
    expect( stupid.list.sort(
      [2,1,4,3]
    ) ).to.deep.eql( [1,4,2,3] )

    expect( stupid.list.sort(
      [2,5,4,3,2,1,0]
    ) ).to.deep.eql( [2,5,3,4,1,2,0] )

    expect( stupid.list.sort(
      [1,1,1,1,2,3,4]
    ) ).to.deep.eql( [1,4,1,3,1,2,1] )

    expect( stupid.list.sort(
      [1,1,1,1,2,3,4,5]
    ) ).to.deep.eql( [1,5,] )

    expect( stupid.list.sort(
      [1,2,3,4,5,5,5,5]
    ) ).to.deep.eql( [1,5,2,5,3,5,4,5] )
  })
})
