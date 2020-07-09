describe("DFS Algorithm", () => {
  const graph1 = require('../../lib/data/dfs/dfsGraph1');
  const graph2 = require('../../lib/data/dfs/dfsGraph2');
  const graph3 = require('../../lib/data/dfs/dfsGraph3');
  const graph4 = require('../../lib/data/dfs/dfsGraph4');
  const graph5 = require('../../lib/data/dfs/dfsGraph5');
  const graph6 = require('../../lib/data/dfs/dfsGraph6');
  const graph7 = require('../../lib/data/dfs/dfsGraph7');
  const dfsFun = require('../../algos/dfs1');

  beforeEach(function () { });

  it("Graph 1", function () {
    expect(dfsFun(graph1)).toEqual(1000);
  });

  it("Graph 2", function () {
    expect(dfsFun(graph2)).toEqual(600);
  });

  it("Graph 3", function () {
    expect(dfsFun(graph3)).toEqual(50);
  });

  it("Graph 4", function () {
    expect(dfsFun(graph4)).toEqual(7000);
  });

  it("Graph 5", function () {
    expect(dfsFun(graph5)).toEqual(8000);
  });

  it("Graph 6", function () {
    expect(dfsFun(graph6)).toEqual(9000);
  });

  it("Graph 7", function () {
    expect(dfsFun(graph7)).toEqual(24);
  });
});
