// Include testing

const graph = {
  val: 1000,
  next: [
      {
          val: 22,
          level: 1,
          next: []
      },
      {
          val: 20,
          level: 1,
          next: [
              {
                  val: 5,
                  level: 2,
                  next: []
              },
              {
                  val: 4,
                  level: 2,
                  next: [
                      {
                          val: 600,
                          level: 3,
                          next: []
                      },
                      {
                          val: 50,
                          level: 3,
                          next: []
                      },
                      {
                          val: 50,
                          level: 3,
                          next: []
                      }
                  ]
              }
          ]
      }
  ]
}

const printNodesBFS = nodes => {
  let nextNodes = [];
  for (let i = 0; i < nodes.length; i++) nextNodes = [...nextNodes, ...nodes[i].next];
  if (nextNodes.length) printNodesBFS(nextNodes);
  console.log(nextNodes);
};

printNodesBFS([graph]);
