import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../componenets/Actions";
import Comment from "../componenets/Comment";

const PostPage = () => {
  const [liked, setLiked] = useState();
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" size={"md"} name="Mark ZuckerBerg" />
          <Flex>
            <Text fontSize={"xs"} fontWeight={"bold"}>
              markzuckerberg
            </Text>
            <Image src={"/verified.png"} w={4} h={4} ml={2} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text color={"gray.light"} size={"sm"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>
      <Text my={3}> Lets Talk about threads!</Text>
      {/* {postImg && ( */}
      <Box
        borderRadius={6}
        border={"1px solid"}
        borderColor={"gray.light"}
        overflow={"hidden"}
      >
        <Image src={"/post1.png"} w={"full"} />
      </Box>
      {/* )} */}
      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>
      <Flex gap={3} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          {" "}
          345 replies
        </Text>
        <Box w={0.5} h={0.5} bg={"gray.light"} borderRadius={"full"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {" "}
          {353 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />

      <Flex gap={3} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like and reply</Text>
        </Flex>
        <Button> Get</Button>
      </Flex>
      <Divider my={4} />
      <Comment
        comment="looks good!!"
        name="tioluwani"
        likes={32}
        createdAt="2d"
        avatarImg="https://bit.ly/tioluwani-kolawole"
      />
      <Comment
        comment="cool👌"
        name="florence"
        likes={33}
        createdAt="2d"
        avatarImg="https://bit.ly/ryan-florence"
      />
      <Comment
        comment="looks good!!"
        name="abramov"
        likes={65}
        createdAt="2d"
        avatarImg="https://bit.ly/dan-abramov"
      />
    </>
  );
};

export default PostPage;
