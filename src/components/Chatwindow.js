import React, { useState, useEffect, useRef } from 'react'

const Chatwindow = ({ party }) => {
  //Array für Request und Response der Grünen
  const [chatGruene, setChatGruene] = useState([
    {
      author: 'bot',
      content:
        'Hallo! Ich bin der Wahl-O-Bot der Partei Bündnis 90/Die Grünen. Was möchtest du von mir wissen?',
      id: 1,
    },
    {
      author: 'bot',
      content: 'Über das Textfeld können Fragen an mich gestellt werden.',
      id: 2,
    },
  ])

  const [chatCdu, setChatCdu] = useState([
    {
      author: 'bot',
      content:
        'Hallo! Ich bin der Wahl-O-Bot der Partei CDU. Was möchtest du von mir wissen?',
      id: 1,
    },
    {
      author: 'bot',
      content: 'Über das Textfeld können Fragen an mich gestellt werden.',
      id: 2,
    },
  ])

  const [chatSpd, setChatSpd] = useState([
    {
      author: 'bot',
      content:
        'Hallo! Ich bin der Wahl-O-Bot der Partei SPD. Was möchtest du von mir wissen?',
      id: 1,
    },
    {
      author: 'bot',
      content: 'Über das Textfeld können Fragen an mich gestellt werden.',
      id: 2,
    },
  ])

  const [chatFdp, setChatFdp] = useState([
    {
      author: 'bot',
      content:
        'Hallo! Ich bin der Wahl-O-Bot der Partei FDP. Was möchtest du von mir wissen?',
      id: 1,
    },
    {
      author: 'bot',
      content: 'Über das Textfeld können Fragen an mich gestellt werden.',
      id: 2,
    },
  ])
  const [chatLinke, setChatLinke] = useState([
    {
      author: 'bot',
      content:
        'Hallo! Ich bin der Wahl-O-Bot der Partei Die Linke. Was möchtest du von mir wissen?',
      id: 1,
    },
    {
      author: 'bot',
      content: 'Über das Textfeld können Fragen an mich gestellt werden.',
      id: 2,
    },
  ])

  const [chatAfd, setChatAfd] = useState([
    {
      author: 'bot',
      content:
        'Hallo! Ich bin der Wahl-O-Bot der Partei AfD. Was möchtest du von mir wissen?',
      id: 1,
    },
    {
      author: 'bot',
      content: 'Über das Textfeld können Fragen an mich gestellt werden.',
      id: 2,
    },
  ])

  const [loading, setLoading] = useState(false)

  const [typedContent, setTypedContent] = useState('')

  let url = ''

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatGruene, chatCdu, chatSpd, chatFdp, chatLinke, chatAfd])

  const handleSubmit = (e) => {
    let chatObject = {}
    e.preventDefault()
    if (party === 'gruene') {
      chatObject = {
        author: 'user',
        content: typedContent,
        id: chatGruene.length + 1,
      }
      setChatGruene((chat) => {
        return [...chat, chatObject]
      })
      //url = 'http://localhost:3000/parties/1'
    }
    if (party === 'cdu') {
      chatObject = {
        author: 'user',
        content: typedContent,
        id: chatCdu.length + 1,
      }
      setChatCdu((chat) => {
        return [...chat, chatObject]
      })
      //url = 'http://localhost:3000/parties/2'
    }
    if (party === 'spd') {
      chatObject = {
        author: 'user',
        content: typedContent,
        id: chatSpd.length + 1,
      }
      setChatSpd((chat) => {
        return [...chat, chatObject]
      })
      //url = 'http://localhost:3000/parties/3'
    }
    if (party === 'fdp') {
      chatObject = {
        author: 'user',
        content: typedContent,
        id: chatFdp.length + 1,
      }
      setChatFdp((chat) => {
        return [...chat, chatObject]
      })
      //url = 'http://localhost:3000/parties/4'
    }
    if (party === 'linke') {
      chatObject = {
        author: 'user',
        content: typedContent,
        id: chatLinke.length + 1,
      }
      setChatLinke((chat) => {
        return [...chat, chatObject]
      })
      // url = 'http://localhost:3000/parties/5'
    }
    if (party === 'afd') {
      chatObject = {
        author: 'user',
        content: typedContent,
        id: chatAfd.length + 1,
      }
      setChatAfd((chat) => {
        return [...chat, chatObject]
      })
      //url = 'http://localhost:3000/parties/6'
    }

    url = `http://localhost:8080/chatbot?content=${encodeURIComponent(
      chatObject.content
    )}&party=${encodeURIComponent(party)}`

    getBotResponse(url)

    setTypedContent('')
  }

  const getBotResponse = (url) => {
    setLoading(true)
    setTimeout(() => {
      fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result)
          let chatObject = {}
          if (party === 'gruene') {
            chatObject = {
              author: 'bot',
              content: result.result,
              id: chatGruene.length + 2,
            }
            setLoading(false)
            setChatGruene((chat) => {
              return [...chat, chatObject]
            })
          }
          if (party === 'cdu') {
            chatObject = {
              author: 'bot',
              content: result.result,
              id: chatCdu.length + 2,
            }
            setLoading(false)
            setChatCdu((chat) => {
              return [...chat, chatObject]
            })
          }
          if (party === 'spd') {
            chatObject = {
              author: 'bot',
              content: result.result,
              id: chatSpd.length + 2,
            }
            setLoading(false)
            setChatSpd((chat) => {
              return [...chat, chatObject]
            })
          }
          if (party === 'fdp') {
            chatObject = {
              author: 'bot',
              content: result.result,
              id: chatFdp.length + 2,
            }
            setLoading(false)
            setChatFdp((chat) => {
              return [...chat, chatObject]
            })
          }
          if (party === 'linke') {
            chatObject = {
              author: 'bot',
              content: result.result,
              id: chatLinke.length + 2,
            }
            setLoading(false)
            setChatLinke((chat) => {
              return [...chat, chatObject]
            })
          }
          if (party === 'afd') {
            chatObject = {
              author: 'bot',
              content: result.result,
              id: chatAfd.length + 2,
            }
            setLoading(false)
            setChatAfd((chat) => {
              return [...chat, chatObject]
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }, 1000)
  }

  return (
    <section className='col-8'>
      <div className='chat main-box'>
        <div className='chat-heading'>
          <h2>Wahl-O-Bot</h2>
        </div>
        <div className='speechbubbles'>
          {party === 'gruene'
            ? chatGruene.map((bubble) => {
                if (bubble.author === 'bot') {
                  return (
                    <span className='single-bubble' key={bubble.id}>
                      <span className='chat-robot gruene'></span>
                      <p className='bubble from-bot'>{bubble.content}</p>
                    </span>
                  )
                }
                if (bubble.author === 'user') {
                  return (
                    <span className='single-bubble' key={bubble.id}>
                      <span className='chat-person'></span>
                      <p className='bubble from-user'>{bubble.content}</p>
                    </span>
                  )
                }
              })
            : ''}

          {party === 'cdu'
            ? chatCdu.map((bubble) => {
                if (bubble.author === 'bot') {
                  return (
                    <span className='single-bubble' key={bubble.id}>
                      <span className='chat-robot cdu'></span>
                      <p className='bubble from-bot'>{bubble.content}</p>
                    </span>
                  )
                }
                if (bubble.author === 'user') {
                  return (
                    <span className='single-bubble' key={bubble.id}>
                      <span className='chat-person'></span>
                      <p className='bubble from-user'>{bubble.content}</p>
                    </span>
                  )
                }
              })
            : ''}

          {party === 'spd'
            ? chatSpd.map((bubble) => {
                if (bubble.author === 'bot') {
                  return (
                    <span className='single-bubble' key={bubble.id}>
                      <span className='chat-robot spd'></span>
                      <p className='bubble from-bot'>{bubble.content}</p>
                    </span>
                  )
                }
                if (bubble.author === 'user') {
                  return (
                    <span className='single-bubble' key={bubble.id}>
                      <span className='chat-person'></span>
                      <p className='bubble from-user'>{bubble.content}</p>
                    </span>
                  )
                }
              })
            : ''}

          {party === 'fdp'
            ? chatFdp.map((bubble) => {
                if (bubble.author === 'bot') {
                  return (
                    <span className='single-bubble' key={bubble.id}>
                      <span className='chat-robot fdp'></span>
                      <p className='bubble from-bot'>{bubble.content}</p>
                    </span>
                  )
                }
                if (bubble.author === 'user') {
                  return (
                    <span className='single-bubble' key={bubble.id}>
                      <span className='chat-person'></span>
                      <p className='bubble from-user'>{bubble.content}</p>
                    </span>
                  )
                }
              })
            : ''}

          {party === 'linke'
            ? chatLinke.map((bubble) => {
                if (bubble.author === 'bot') {
                  return (
                    <span className='single-bubble' key={bubble.id}>
                      <span className='chat-robot linke'></span>
                      <p className='bubble from-bot'>{bubble.content}</p>
                    </span>
                  )
                }
                if (bubble.author === 'user') {
                  return (
                    <span className='single-bubble' key={bubble.id}>
                      <span className='chat-person'></span>
                      <p className='bubble from-user'>{bubble.content}</p>
                    </span>
                  )
                }
              })
            : ''}

          {party === 'afd'
            ? chatAfd.map((bubble) => {
                if (bubble.author === 'bot') {
                  return (
                    <span className='single-bubble' key={bubble.id}>
                      <span className='chat-robot afd'></span>
                      <p className='bubble from-bot'>{bubble.content}</p>
                    </span>
                  )
                }
                if (bubble.author === 'user') {
                  return (
                    <span className='single-bubble' key={bubble.id}>
                      <span className='chat-person'></span>
                      <p className='bubble from-user'>{bubble.content}</p>
                    </span>
                  )
                }
              })
            : ''}

          <div ref={messagesEndRef} />
        </div>

        <div className='input'>
          {loading && (
            <div className='loading-dots'>
              <span className='writing'>schreibt</span>
              <span className='dot-flashing'></span>
            </div>
          )}
          <form className='form' onSubmit={handleSubmit}>
            <input
              type='text'
              className='form-control'
              placeholder='Hier schreiben'
              value={typedContent}
              onChange={(e) => setTypedContent(e.target.value)}
            />
            <button className='send' type='submit'></button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Chatwindow
