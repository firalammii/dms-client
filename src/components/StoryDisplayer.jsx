import React, { useContext } from 'react';
import { Context } from '../ContextProvider';

function StoryDisplayer ({ toggleDiplayPosts }) {

    const { stories } = useContext(Context);

    return (
        <div className='story'>

            {stories.length == 0 && <><h1>Sorry you haven't created any yet</h1>
                {setTimeout(toggleDiplayPosts, 1500)} </>}
            {
                stories.map(each => {
                    const { id, title, story, eventDate, date, time, img } = each;
                    return (
                        <div className='story-container' key={id}>

                            <header className='story-header'>
                                <h2>title:{title} </h2>
                            </header>
                            <main className='story-main'>
                                {
                                    img && <img src={img} />
                                }
                                <p>content: {story}</p>
                                <p className='event-date'>{eventDate}</p>
                            </main>
                            <footer className='story-footer'>
                                <p>Date: {date} {time}</p>
                            </footer>

                        </div>
                    );
                })
            }

        </div>

    );
}

export default StoryDisplayer;