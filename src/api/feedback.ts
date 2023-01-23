import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const giveFeedback = async (username: string, emoji: string, feedback: string): Promise<any> => {
  let data
  const response = await fetch('https://restaurant-server-twu5.onrender.com/feedback/create', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: `username=${username}&emoji=${emoji}&feedback=${feedback}`
  })
  switch (response.status) {
    case 200:
      data = await response.json()
      if (data.success === 'Feedback has been created') {
        toast.update('giveFeedbackToast', {
          autoClose: 5000,
          render: data.success,
          type: toast.TYPE.SUCCESS,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
      } else if (data.error === 'An error occurred' || data.error === 'Incomplete Feedback') {
        toast.update('giveFeedbackToast', {
          autoClose: 5000,
          render: data.success,
          type: toast.TYPE.ERROR,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
      }
      break
    case 400:
      toast.update('giveFeedbackToast', {
        render: 'You don&apos;t have access',
        autoClose: 5000,
        type: toast.TYPE.ERROR,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      break
    case 500:
      toast.update('giveFeedbackToast', {
        render: 'An error occurred, this is not your fault',
        autoClose: 5000,
        type: toast.TYPE.ERROR,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      break
  }
}

const getFeedback = async (): Promise<any> => {
  let data
  const response = await fetch('https://restaurant-server-twu5.onrender.com/feedback', {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })
  switch (response.status) {
    case 200:
      data = await response.json()
      return data.feedbacks
    case 400:
      toast.error('You don&apos;t have access', {
        position: 'top-center',
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      break
    case 500:
      toast.error('An error occurred, this is not your fault', {
        position: 'top-center',
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      break
  }
}

export { giveFeedback, getFeedback }
