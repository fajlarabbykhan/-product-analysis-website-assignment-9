import React from 'react';

const Blogs = () => {

    return (
        <div>
            <div className=''>
                <p className='text-center text-3xl font-normal text-gray mt-5'>What is Context API?</p>
                <p className='text-center text-xl font-normal text-gray m-5'>A React app can use the React Context API to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent and so on. Context is also marketed as a simpler, lighter way to Redux state management.

                    Context API is a (sort of) new feature in React 16.3 that allows you to easily and lightly communicate state across the entire project (or part of it).</p>
                <p className='text-center text-3xl font-normal text-gray mt-5'>Context API: How it works?</p>
                <p className='text-center text-xl font-normal text-gray m-5'>React create All you need is Context(). It will give you a customer and a provider. Provider is a component that supplies the state to its children, as its name suggests. It will contain the "store" and serve as the parent of all components that may require it. As it happens, a consumer is a component that consumes and uses the state.</p>
                <p className='text-center text-3xl font-normal text-gray mt-5'>What are Semantic Tags?</p>
                <p className='text-center text-xl font-normal text-gray m-5'>HTML was established to describe documents on the early internet as a markup language. As the internet expanded in popularity and more people used it, its requirements evolved.
People wanted to share other items on the internet, which was originally intended for sharing scientific documents. People began to desire to make the web appear nicer quite rapidly. Because the web was not supposed to be planned from the start, programmers utilized various hacks to get things laid out in various ways. Rather than describing information in a table, programmers would utilize the table>/table> to arrange other components on a page.
Programmers began to utilize a generic "non-semantic" tag like div> as the use of aesthetically designed layouts grew. They would frequently assign a class or id property to these items to explain their function. For example, instead of header>, div class="header"> was frequently used.
                    Because HTML5 is still a young standard, non-semantic elements are nevertheless widely used on websites today.</p>
            </div>
        </div>
    );
};

export default Blogs;