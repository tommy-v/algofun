module.exports = {
  val: 24,
  next: [
      {
          val: 22,
          next: [
            {
                val: 2,
                next: []
            },
            {
                val: 40,
                next: []
            },
            {
                val: 50,
                next: [
                    {
                        val: 2,
                        next: []
                    },
                    {
                        val: 40,
                        next: []
                    },
                    {
                        val: 50,
                        next: [
                            {
                                val: 2,
                                next: []
                            },
                            {
                                val: 7000,
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
      },
      {
          val: 20,
          next: [
              {
                  val: 5,
                  next: [
                    {
                        val: 2,
                        next: []
                    },
                    {
                        val: 40,
                        next: []
                    },
                    {
                        val: 50,
                        next: []
                    }
                ]
              },
              {
                  val: 4,
                  next: []
              }
          ]
      }
  ]
}