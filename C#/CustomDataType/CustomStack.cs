using System.Collections;

namespace CustomDataType
{
    internal class CustomIntStack
    {
        private static readonly int MAX = System.Int16.MaxValue;
        private int count;
        private int[] stack = new int[MAX];

        public CustomIntStack()
        {
            count = -1;
        }

        public bool isEmpty()
        {
            return (count < 0);
        }

        public int Peek()
        {
            return stack[count];
        }

        public void Push(int val)
        {
            stack[++count] = val;
        }

        public int Pop()
        {
            int retVal = stack[count];
            stack[count--] = 0;
            return retVal;
        }
        
        public void Clear()
        {
            stack = new int[MAX];
            count = -1;
        }

        public int[] ToArray()
        {
            int[] retVal = new int[count -1];
            for (int i = 0; i < count; i++)
            {
                retVal[i] = stack[i];
            }

            return retVal;
        }
    }
}