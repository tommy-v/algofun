module.exports = {
  val: 1000,
  next: [
      {
          val: 22,
          next: []
      },
      {
          val: 20,
          next: [
              {
                  val: 5,
                  next: []
              },
              {
                  val: 4,
                  next: [
                      {
                          val: 600,
                          next: []
                      },
                      {
                          val: 50,
                          next: []
                      },
                      {
                          val: 50,
                          next: []
                      }
                  ]
              }
          ]
      }
  ]
}