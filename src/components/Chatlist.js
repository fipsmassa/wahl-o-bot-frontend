import React from 'react'

const Chatlist = ({ party, selectParty }) => {
  return (
    <section className='col-4'>
      <div className='parties main-box'>
        <h2>Parteien</h2>
        <div className={`party gruene ${party === 'gruene' ? 'active' : ''}`}>
          <span
            className='party-logo'
            onClick={() => selectParty('gruene')}
          ></span>
          <span>
            Bündnis 90/Die Grünen
            <br />
            <a
              href='https://www.gruene-bw.de/wp-content/uploads/2021/01/GrueneBW-Landtagswahlprogramm-2021-Wachsen-wir-ueber-uns-hinaus.pdf'
              target='_blank'
              rel='noreferrer'
            >
              Wahlprogramm
            </a>
          </span>
        </div>
        <div className={`party cdu ${party === 'cdu' ? 'active' : ''}`}>
          <span
            className='party-logo'
            onClick={() => selectParty('cdu')}
          ></span>
          <span>
            CDU
            <br />
            <a
              href='https://www.cdu-bw.de/data/documents/2021/02/12/3-6026a60316d00.pdf'
              target='_blank'
              rel='noreferrer'
            >
              Wahlprogramm
            </a>
          </span>
        </div>
        <div className={`party spd ${party === 'spd' ? 'active' : ''}`}>
          <span
            className='party-logo'
            onClick={() => selectParty('spd')}
          ></span>
          <span>
            SPD
            <br />
            <a
              href='https://www.spd-bw.de/dl/SPD_BW_Wahlprogramm_2021.pdf'
              target='_blank'
              rel='noreferrer'
            >
              Wahlprogramm
            </a>
          </span>
        </div>
        <div className={`party fdp ${party === 'fdp' ? 'active' : ''}`}>
          <span
            className='party-logo'
            onClick={() => selectParty('fdp')}
          ></span>
          <span>
            FDP
            <br />
            <a
              href='https://wahl.fdpbw.de/sites/default/files/2021-02/Landtagswahlprogramm_2021_final.pdf'
              target='_blank'
              rel='noreferrer'
            >
              Wahlprogramm
            </a>
          </span>
        </div>
        <div className={`party linke ${party === 'linke' ? 'active' : ''}`}>
          <span
            className='party-logo'
            onClick={() => selectParty('linke')}
          ></span>
          <span>
            Die Linke
            <br />
            <a
              href='https://www.die-linke-bw.de/fileadmin/lv/2021LTW/Wahlprogramm_2021_web_1_.pdf'
              target='_blank'
              rel='noreferrer'
            >
              Wahlprogramm
            </a>
          </span>
        </div>
        <div className={`party afd ${party === 'afd' ? 'active' : ''}`}>
          <span
            className='party-logo'
            onClick={() => selectParty('afd')}
          ></span>
          <span>
            AfD
            <br />
            <a
              href='https://afd-bw.de/afd-bw/wahlprogramme/landtagswahlprogramm_afd_2021_a4.pdf'
              target='_blank'
              rel='noreferrer'
            >
              Wahlprogramm
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Chatlist
