import { Button } from '@radix-ui/themes';

export const StyledButton = ({ text, onClick }) => {
    return (
      <Button
      title='Submit'
      text="Submit"        
      onClick={onClick}
        className="bg-[#BF5FAB] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#a34d92] transition-all duration-300"
      >
        {text}
      </Button>
    );
  };
  
  