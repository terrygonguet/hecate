module.exports = {
  url:"www.guidesmontalbert.com",
  type:"medieval",
  flora: {
    Tulipe: {
      type:"fleur",
      height: [20,30],
      radius:1,
      leaves: {
        color:"green",
        shape:"smooth"
      },
      species: {
        Bleu: {
          leaves: {
            color:"blue"
          }
        },
        Rouge: {
          leaves: {
            color:"red"
          }
        },
        Noir: {
          height:[200,300],
          radius:[30,70],
          leaves: {
            color:"black"
          }
        }
      }
    },
    Hetre: {
      type:"arbre",
      height: [80,320],
      radius:[20,100],
      fruit:"gland",
      leaves: {
        color:"green",
        shape:"round"
      },
      species: {
        Barbu: {
          height:[50,180]
        },
        Dru: {
          radius:[50,150],
          leaves: {
            color:"black"
          }
        },
        Doux: {
          fruit:"fleur",
          leaves: {
            shape:"sticky"
          }
        }
      }
    },
    Sapin: {
      type:"arbre",
      height: [200,300],
      radius:[30,70],
      fruit:"pinecone",
      leaves: {
        color:"green",
        shape:"spiky"
      },
      species: {
        Bleu: {
          fruit:null,
          leaves: {
            color:"blue"
          }
        },
        Rouge: {
          leaves: {
            color:"red"
          }
        }
      }
    }
  }
}
