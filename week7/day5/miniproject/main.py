#MiniProjectTicTacToe
board = [['-', '-', '-'],
         ['-', '-', '-'],
         ['-', '-', '-']]


def display_board():
    print('*************')
    print(f'* + {board[0][1]} +  |  + {board[0][1]} +  |  + {board[0][2]} + *')
    print(f'* + {board[1][0]} +  |  + {board[1][1]} +  |  + {board[1][2]} + *')
    print(f'* + {board[2][0]} +  |  + {board[2][1]} +  |  + {board[2][2]} + *')
    print('*************')


display_board()

plr_x = []

turns_x = 0
turns_o = 0


def player_input(turns_x=0, turns_o=0):
    total_turns = turns_x + turns_y
    if total_turns is > 9:
        print('game over, do u want to play agin?')
    if turns_x == turns_y:
        print('Player X turn')
        x_row = input('select Row ')
        x_col = input('select Col ')
        turns_x += 1
    else:
        print('Player O turn')
        o_row = input('select Row ')
        o_col = input('select Col ')
        turns_o += 1

    # for x in board:
    #     board[x_row][x_col] = X


player_input()

board[x_row][x_col]