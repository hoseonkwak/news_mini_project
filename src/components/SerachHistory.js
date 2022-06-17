import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Tag = styled.div`
    display: flex;
    display: inline-block;
    font-size: 14px;
    border-radius: 16px;
    padding: 6px 10px;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
    &:hover {
        background-color: #6babf3;
    }
    margin: 4px;
    box-sizing: border-box;
`;

const TagLabel = styled.span`
    margin-right: 4px;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`;

const SearchHIstory = ({history, searchHistory, deleteHistory}) => {
    return (
        <Tag>
        <TagLabel onClick={searchHistory}>{history}</TagLabel>
        <FontAwesomeIcon 
            icon={faTimes}
            size="lg"
            onClick={deleteHistory}
        />
        </Tag>
    );
};

export default SearchHIstory;