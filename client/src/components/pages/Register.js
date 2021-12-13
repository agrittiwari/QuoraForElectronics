import React, { useState } from 'react'
import logo from '../png/logo 2 1.png'
import pass from '../png/password icon 1.png'
import Contacts from '../utils/svgLogo'

const Email = () => (
    <svg width="121" height="70" viewBox="0 0 64 81" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="64" height="81" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_1_17" transform="translate(-0.132812) scale(0.005625 0.00444444)"/>
</pattern>
<image id="image0_1_17" width="225" height="225" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABhYWG8vLz09PT7+/uampplZWXu7u5wcHAdHR3Ly8uoqKiurq7R0dH29vbZ2dlRUVHm5uaGhoY0NDQqKirDw8MtLS05OTldXV1CQkIyMjKLi4uTk5OkpKRYWFh+fn4aGhqdnZ0/Pz8kJCR1dXVJjwlUAAAE7ElEQVR4nO2dCZbiIBCGxZiOMVHjvmtPL/e/4jye7bSOIUICVVDUdwL+B6RWKr0ewzAMwzAMw/xjXozfFnnW7/ezfPE2LubYC7JJVX6vxDOrvKywl2aB4bhfI+6X/niIvcQuTMt9o7wr+3KKvdCWTDINeVeyCfZiW5AstfVJlgn2gg1JRkb6JKOQNE42xvokm1DO6kD//v1PNsBevA7j1vokY+zlv2Q66yRQiJnnpqPoqE9SYIto4mRBoBAnbBlqmh00ffrYQhSkW0sChdim2GLqGJgbeTV/PDQbA4v6JN6FHLYFCuHZLqY2j+iVkV930d5H5pcttqh7bJmJRzwyGnYM/TPemH4brlo9njhwU2cChfDDDe8aTTQxwxYn6RYPvsKDeNG+qX8E3/C3T1nokWELnDgWKAR2eqpdVs2EDa7AxLlAIXDzqPYd7mdGmAIhthB3E81qE21Z4gl0/yG9gvc5dW0Lb6DZRJcu9yNY4X4JprBEUqhTwrbDHkfgEEwgVm7Rbdj0CE4Q5Sb9VA9OUgpQoBAYAitQhRjdU3C2QoJhL3JQhTmCwrpmPHesEBSCCsT41MyBFcL3o7pL5dcDn+CH9Ggk8F7NG7DCN3CFC2CFC3CFsOYQwyBCZTBuwGcyICMLCXx0wQrDV0j/HtL/ltK3h/R9Gvp+Kf3Ygn58SD/GjyBPA2sQvxEU0s+X0s95069bRFB7ol8/pF8Dpl/Hj6AXg34/Df2eqAj62uj3JkbQX0q/RziCPm/6vfoRvLeg/2YmgndP9N+uRfD+MII3pPTfAUfwljuC9/gRzFSIYC4G/dkmEcynsTxjaOTdDkrIz4nq0Z/11bPVguKRoX+G/My9COYm9ujPvuxFML+0R38GrYT6HGEJ9VnQEurzvCXpWG8mu68+mhbDcfNOBj5X/wfa/0b4B+n/WzAMwzAMwzAMwzDMD+lwXk2KYn2lKCbVfBh0duaHQZWUx3x2UGZpDrP8eE6qAFM1aZWcMpOE6SE7JVUomzop87bPS7/ys+eJ08F60b3SfVgkfp7atDjaexm8Wqw9O7LD0n4L5qz0ZivnH+qPZTc2Hx5kVQflpyN5V7Zn3KLpeudU3pXLGkve0FVb6TMnjCtZwQ4ZyqCLOGu3t6+OT8jDmnyB65N8QVXC1zj6wDROYF5Vqli6dlznF1R9kplTLwB6wFc97sZ+wbyJ1cHNdRzgH9BfLg58OejpZa+w3cSY+rSBVy5WI0jo4Wx6WGwmPmJrUXC0pC+Fm9Jiyt7KSYWdeGWKhZDDHyNYT2fTCD3E05yOYz/fsdevQadxfNDDgtvRYSiBf2a+nktbgS4f2tul5bP9UHZQ0moXw7iDN1rcxRC+ove8mwo8Y6/YmLOZQD+DiWaMQg3oQc92MElRQYzwso/BUDDovwLYQvvvAr6HE2o0Aw3Xk59copeCC8dZe0bLfQv3jEp0zin2GjvyWqCveTVdXubfIAc8u+FVyf8be4GdeZHUCH8LX22iHwXCbjSWF1Ps1VmhKRHuWwmtHU2FN/guGRd8qgWGGRY+ow4Uw0td1KNOaITsc9+j9r+xV2YNlUC/K4UmqKqKYcdN96hiKLiOWNeoJr6F73XfUHnfYVUqmlBVMaB/D+sO1eBFVhgOrDB8WGH4sMLwiVchxFM7GHYKhcddnwY7W83DDMMwDMMwDBR/AcoYcwkg4xrBAAAAAElFTkSuQmCC"/>
</defs>
</svg>


)
// const Password = () => (
//     <svg width="121" height="70" viewBox="0 0 64 85" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
// <rect width="64" height="85" fill="url(#pattern0)"/>
// <defs>
// <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
// <use xlinkHref="#image0_1_16" transform="translate(-0.0130208) scale(0.00520833 0.00392157)"/>
// </pattern>
// <image id="image0_1_16" width="197" height="255" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAAD/CAMAAAB2B+IJAAAAeFBMVEUAAAD29vb9/f23t7f6+vp/f396enr///+EhITy8vIoKCgdHR3FxcXIyMjs7OwODg7T09Pd3d2/v79vb2+Kioqurq4tLS1RUVFLS0vl5eV0dHQ7OzsYGBidnZ00NDSRkZFDQ0OlpaVmZmZoaGhOTk5ZWVldXV0cHBzuoa0JAAAHHElEQVR4nO2daXuyOhBASRyLKwW3atWqbe37///hldtqEZgwCRONfeZ8bhOOWcjGJFJ/gejeD8CCWISDWISDWISDVwso4jMjTxYAOo77WTqadHImozTrx7H25eLB4iQAaWd2XGyiIpvFcdZJ4aTCnyW3xekp0+1LhPOyTU+WzLmyWoDWoyeDwZmnEfCWCKMF6GxGUPiml3F6sFlomJgqUk3VmoDmypzJQqv5m5VDzmKumDxYLMDF4ceDpV4xWACMl04OOcsxxzukvYVevTo75Lyu2lerthYA82EriSgazlsXR0sLSKYtHXI+kpYa7Szi8YBB4lQc4/h+FvGWxSFn20qjhQVAu2Z9zbRN43C3gL7du7qJl767hrMFJG4vOpw39zbuagErnnZdZLBy1XC08CHRQsPNAlZrDxJRtHbUcLKAxH3gZGbp1jbcyuLDk8TpNe70PC4WuudNIopmLmNDBws99ygRRR0HDXsLyMgPtFlOn2a73W72NF3SR76ZfdNwsKC97d668yxR+oxKVvMurWNb38Ai7hIeZLHL+uWFQACtsi3lJ+hZjwxtLSBtfoqvkUKWaU4i4/fmBFLb0rC2aHxnf5lXmkBnjf30wLNFvGt4gHXauHwJcbpvSGVnWafsLGDVkP2WNEsAfWhIx3IkYmcRmyvDOqP+hnFmLo6pXWFYWTQ07VeLJTJQ5mVpuwZuZaG/TBnv7F665kn7u1ViNhYwNuV7sO3lY+NIxqowbCy0qVXM7RcxjBpTm8KwsDAOoKxLIsc4rrQZTllYxIY9Fss2cUYbXj82SVpYJAs0x3d7gW8Ar6RvfXoydAuYoBkOnNdgwPDTTOiJWljgw7iR+3qYod+zaN9kC8Pgo9tmAyJGp7/P9GEI3aKD5eZen/5Pt4/WqQ6/hUY3Kg7t9oLw7vaVnDDZIsEmFmu3hy+wR1JekHspqgU+EJy33ZbTaF0lv/ioFhobuw0sunUMrGWQ6yq5LLBm4fjWLoL+QuSGQbVAexKH1aMy6ABtTS1nogUkSEbLdtuK38SfSOoJMQGqBfaKbdnN/qSOTcOpkwyqRdt8zKljVWrOa6GRUfkzR4U6Val/9clTuw5qWSCbwu9MFkgPSB2hUS2QXWGWZoFX2CNvjVLIKrHFHMAENnehjm6oFpv6bBjeFjlY8x4S/59o0a/Phe3UISDpE197LS14Gvepef8Ni+c7WmzYLJBtv5tYDNkskDmYWFQRCwpiocRCLCqIhRILsaggFkosxKKCWCixEIsKYqHEQiwqiIUSC7GoIBZKLMSiglgosRCLCmKhai0AdJkY2VUfxpU/dSNGjsJBNYO6L5/KFqAhm2x73TL1mTzPejzMkBMa1T/cjrJqrKOShU4Ovj7d5uPzkGiDBcChbbiY2zAoBaUpWkByvPfjkfm6OtxesIDVYxTEN1dn9KNCSTySRH6oGmosNG+oFf8c46pF46el4fF7Tv9ikSAnlALmX79sgZ5YD5nLCdKzBezv/UgOLOHaghIIIEDOR0jPFvjHeCEzubYwfYoZMFt9bUGJjxEevZIFJSBreHTFIhjEIhzEIhzEIhzEIhzEIhzEIhzEIhzEIhzEIhzEgs6y2xmnaTrudP3sFt7AYrDLIP65uEpDtvMQO9y/xS65io0KOuFff/RtsazGdwWdcdcrzxbT2pCcAMzZ+LVA43gwBxH3avGBRwnBA5u54NPiDXXIaxXnDQE+LYxBQizCoTfj0aIhxj0WOMgFjxYNwQ6BcU/an0VjnCHGfsqfRWNcLMb9XG8WhICsfbZuypsFIZKpZrtnyZvFlmDBdlrDmwUhLhaMuDLzZkEIesfXvMXCyN+wIAT45Ts6482CEOjwAfoow9ziYsE2x/BmMWiOY2qIYW6Jv3HUuHEcZby6wQp/FtMmC74BiM/5RUM8SM7JnkeLhsLgvHPT57zbGPafbxAV+bXYGOasvGfyva5H7dHLekCxLnL6XRt8QS5/AixaryOe12nX5S+HvnNJ9rzZeF/5n1TuE4OY/QC1//2LY7mNr4x3Rjlxg72kUofL2sX+cAcLvuHTBbEgIhZExIKIWBARCyJiQUQsiIgFEbEgIhZExIKIWBARCyJiQeQWFtfLg/oxV3L2CRRJPBzSvsk58+ciPjKQM//hIBbhIBbhIBbhIBbhIBbhIBbhIBbhIBbhIBbhIBbhIBbh8DctHjOa6Kxk8YgBj39DHp+j7HpY0L4B582Fs0X2eCG0CwfaLzG0Hy0me86xEkN7fu9HcuDyVd1vhPy3ez+TNb9RIi4WDxhF+/fD38JtBYxf2tyEJ10ti1NphH+XSpHP2vsvuL9T8cxS1VsoeKBxyHWki6KFUvF4f+/HI7EfX183dW2hIB69hn6xynA6KsemKlnkHiqddMJlkqrKt0JVi1wkbGqeuM7i8RCLcBCLcBCLcPgbFv8BLK6UBOdCOe4AAAAASUVORK5CYII="/>
// </defs>
// </svg>

// )
// const Phone = () => (
//     <svg width="121" height="70" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
// <rect width="100" height="101" fill="url(#pattern0)"/>
// <defs>
// <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
// <use xlinkHref="#image0_2_9" transform="translate(0 -0.0340117) scale(0.00462963)"/>
// </pattern>
// <image id="image0_2_9" width="216" height="233" xlinkHref="data:image/jpeg;base64,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"/>
// </defs>
// </svg>

// )


const Register = () => {
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });
    const { name, email, password, password2 } = user;
    const onChange = e => setUser({...user, [e.target.name]: e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        if(name === '' || email === '' || password === '') {
            alert('Please enter all Field')
        } else if (password !== password2) {
            alert('Passwords do not match')
        } else {
            alert('User Successfully register')
        }
    }
    return (
        <div className='register'>
            <div>
                <img src={logo} alt='RegisterLogo' className='logo' />
            </div>
            <div className='form-container'>
            <h1>
                Account <span className='text-yellow'>Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <div className='input-form'>
                    <input type='text' name='name' placeholder='Enter The FullName' value={name} onChange={onChange} required />
                    <Contacts/>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <div className='input-form'>
                        <input type='email' name='email' placeholder='Enter The Username' value={email} onChange={onChange} required />
                        <Email />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <div className='input-form'>
                        <input type='password' name='password' placeholder='Enter The Password' value={password} onChange={onChange} required minLength="6" />
                        <img src={pass} alt='pass' className='icon'/>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <div className='input-form'>
                    <input type='password' placeholder='Enter The Password Again' name='password2' value={password2} onChange={onChange} required minLength="6" />
                    <img src={pass}  alt='password' className='icon'/>
                    </div>
                </div>
                <div>
                    <input type='submit' value="Register" className="btn btn-yellow btn-block" />
                </div>
            </form>
        </div>
        </div>
    )
}

export default Register
