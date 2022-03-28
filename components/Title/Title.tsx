import Typography from "@mui/material/Typography";

interface PageTitleProps {
  label: string,
  description?: string
}

const Title: React.FC<PageTitleProps> = ({ label, description }) => (
  <> 
    <Typography variant={'h2'} component={'h1'} sx={{ m: 2 }} align={'center'}>
      {label}
    </Typography>
    {description && (
      <Typography variant={'h6'} sx={{ m: 4 }} align={'center'}>
        {description}
      </Typography>
    )}
  </>
);

export default Title;