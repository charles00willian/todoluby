import { Field, FieldProps, Form, Formik, FormikHelpers, FormikProps } from 'formik'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import IApplicationState from '../../commons/interfaces/IApplicationState';
import ITask from '../../commons/interfaces/ITask';
import InputBar from '../../components/InputBar';
import Task from '../../components/Task';
import { addTask, doTask } from '../../store/modules/tasklist/actions';
import { 
  Container, 
  SortButton, 
  SortButtonContainer, 
  TaskList
} from '../../styles/pages/Home';

const schema = Yup.object().shape({
  taskName: Yup.string()
    .min(5, 'A tarefa deve ter conter mais de 5 caracteres')
    .required('Descrição da tarefa é obrigatória'),
})

interface FormValues {
  taskName: string;
}

enum SortTypes {
  DATE = 'DATE',
  ALPHA = 'ALPHA',
  UNORDERED = 'UNORDERED',
}

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [order, setOrder] = useState<SortTypes>(SortTypes.UNORDERED);

  const dispatch = useDispatch();

  const tasklist = useSelector((state: IApplicationState) => state.tasklist);

  const sortByDate = (tasks: ITask[]) => {
    return tasks.sort((a, b) => (new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()))
  }

  const sortAlphabetically = (tasks: ITask[]) => {
    return tasks.sort((a, b) => {
      if(a.description.toLocaleLowerCase() < b.description.toLocaleLowerCase()) { 
        return -1; 
      }
      if(a.description.toLocaleLowerCase() > b.description.toLocaleLowerCase()) { 
        return 1; 
      }
      return 0;
    })
  }

  const sortTasks = useCallback(() => {
    const sort = {
      [SortTypes.DATE]: () => sortByDate([...tasklist.tasks]),
      [SortTypes.ALPHA]: () => sortAlphabetically([...tasklist.tasks]),
      [SortTypes.UNORDERED]: () => tasklist.tasks,
    }

    return sort[order]();

  },[tasklist, order])

  useEffect(() =>{
    setTasks(sortTasks());
  },[sortTasks]);

  const handleSubmit = (
    values: FormValues, 
    formikHelpers: FormikHelpers<FormValues> 
  ) => {
    dispatch(addTask(values.taskName));
    formikHelpers.resetForm();
  };

  const handleToggleTaks = (id: string) => {
    dispatch(doTask(id));
  }

  const handleChangeOrder = (type: SortTypes) => {
    setOrder(type);
  }

  return (
    <Container>
      <Head>
        <title>Todo Luby</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Formik 
        initialValues={{
          taskName: ''
        } as FormValues} 
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnBlur={false}
      >
        {() => (
          <Form>
            <Field name="taskName">
              {({ 
                  field,
                  meta: { touched, error}
                }: FieldProps) => (
                <InputBar 
                  textInputProps={{
                    ...field
                  }} 
                  buttonProps={{
                    type: 'submit',
                  }} 
                  errorMessage={(touched && error) || undefined}
                />
              )}
            </Field>
          </Form>
        )}
      </Formik>
      <SortButtonContainer>
        <SortButton onClick={() => handleChangeOrder(SortTypes.DATE)}>
          Ordernar por data
        </SortButton>
        <SortButton onClick={() => handleChangeOrder(SortTypes.ALPHA)}>
          Ordernar por descrição
        </SortButton>
      </SortButtonContainer>
      <TaskList>
        {tasks.map(task => (
          <Task 
            key={task.id} 
            description={task.description} 
            checked={task.done} 
            onClick={() => handleToggleTaks(task.id)}
          />
        ))}
      </TaskList>
    </Container>
  )
}
