/*global describe, it */

const expect = require('chai').expect
const babel = require('babel-core')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('objects', () => {
  const babelResult = babel.transformFileSync(
    path.resolve(__dirname, '..', 'objects.js'), {
      presets: ['es2015']
    }
  );
  jsdom({
    src: babelResult.code
  })

  it('defines an object called `playlist`', () => {
    expect(typeof playlist).to.equal('object')
    expect(Object.keys(playlist).length).to.be.greaterThan(0)
  })

  describe('updatePlaylist(playlist, artistName, songTitle)', () => {
    it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
      expect(updatePlaylist({}, 'Phil Ochs', "Here's to the State of Mississippi")).
        to.eql({ 'Phil Ochs': "Here's to the State of Mississippi" })
    })
  })

  describe('removeFromPlaylist(playlist, artistName)', () => {
    it('removes `artistName` from `playlist`', () => {
      expect(removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye")).
        to.eql({})
    })
  })
})
